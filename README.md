# GASSAC Website

A responsive six-page Django website for the Global Academia of Scholarly Skill Alliance and Collaboration (GASSAC).

## Run locally

```powershell
python -m pip install -r requirements.txt
python manage.py runserver
```

Open `http://127.0.0.1:8000/` in a browser.

## Pages

- Home
- About Us
- Our Team
- Activities
- Membership
- Contact Us

Bootstrap, Bootstrap Icons, and Google Fonts are loaded from public CDNs. The contact form currently demonstrates the front-end flow and does not send email or persist submissions.
