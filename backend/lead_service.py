import requests

def send_lead(lead_data):

    requests.post(
        "https://formspree.io/f/xrevkvqd",
        data={
            "intent": lead_data["intent"],
            "budget": lead_data["budget"],
            "location": lead_data["location"],
            "bedrooms": lead_data["bedrooms"],
            "name": lead_data["name"],
            "phone": lead_data["phone"],
            "email": lead_data["email"]
        }
    )