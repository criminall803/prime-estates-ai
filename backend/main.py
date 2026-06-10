from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from lead_service import send_lead

from ai import load_properties
from groq_ai import ask_ai

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sessions = {}


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {"status": "running"}


@app.get("/properties")
def properties():
    return load_properties()


@app.post("/chat")
def chat(req: ChatRequest):

    session_id = "demo"

    if session_id not in sessions:
        sessions[session_id] = {
            "lead_mode": False
        }

    session = sessions[session_id]
    message = req.message.strip()
    lower = message.lower()

    # ==========================
    # LEAD COLLECTION FLOW
    # ==========================

    if session.get("lead_mode"):

        if "intent" not in session:

            session["intent"] = message

            return {
                "reply": "What's your budget?"
            }

        elif "budget" not in session:

            session["budget"] = message

            return {
                "reply": "Which city are you interested in?"
            }

        elif "location" not in session:

            session["location"] = message

            return {
                "reply": "How many bedrooms do you need?"
            }

        elif "bedrooms" not in session:

            session["bedrooms"] = message

            return {
                "reply": "What's your full name?"
            }

        elif "name" not in session:

            session["name"] = message

            return {
                "reply": "What's the best phone number to reach you?"
            }

        elif "phone" not in session:

            session["phone"] = message

            return {
                "reply": "What's your email address?"
            }

        elif "email" not in session:

            session["email"] = message
            send_lead(session)

            with open("leads.txt", "a") as f:
                f.write(
f"""
Intent: {session['intent']}
Budget: {session['budget']}
Location: {session['location']}
Bedrooms: {session['bedrooms']}
Name: {session['name']}
Phone: {session['phone']}
Email: {session['email']}
-------------------------
"""
                )

            sessions.pop(session_id)

            return {
                "reply":
                "Thank you. Your details have been sent to our agent. Someone will contact you shortly."
            }

    # ==========================
    # PROPERTY SEARCH
    # ==========================

    if (
        "house" in lower
        or "home" in lower
        or "property" in lower
        or "properties" in lower
        or "bedroom" in lower
    ):

        properties = load_properties()

        property_text = ""

        for p in properties[:3]:

            property_text += (
                f"🏠 {p['address']}\n"
                f"{p['city']}\n"
                f"${p['price']:,}\n"
                f"{p['bedrooms']} Bed • {p['bathrooms']} Bath\n\n"
            )

        return {
            "reply":
            f"""Here are some available properties:

{property_text}

If you're interested in any property, type CONTACT and I'll connect you with an agent.
"""
        }

    # ==========================
    # LEAD TRIGGER
    # ==========================

    if (
        "contact" in lower
        or "call me" in lower
        or "interested" in lower
        or "schedule viewing" in lower
        or "view property" in lower
    ):

        session["lead_mode"] = True

        return {
            "reply":
            "Are you looking to Buy, Sell, or Rent?"
        }

    # ==========================
    # GROQ AI
    # ==========================

    ai_response = ask_ai(message)

    return {
        "reply": ai_response
    }