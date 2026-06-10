import smtplib
from email.mime.text import MIMEText

def send_lead_email(realtor_email, lead_data):

    body = f"""
New Real Estate Lead

Intent: {lead_data['intent']}
Budget: {lead_data['budget']}
Location: {lead_data['location']}
Bedrooms: {lead_data['bedrooms']}
Name: {lead_data['name']}
Phone: {lead_data['phone']}
Email: {lead_data['email']}
"""

    msg = MIMEText(body)

    msg["Subject"] = "New Real Estate Lead"
    msg["From"] = sender_email
    msg["To"] = realtor_email

    server = smtplib.SMTP_SSL("smtp.gmail.com", 465)


    server.login(sender_email, app_password)

    server.send_message(msg)

    server.quit()