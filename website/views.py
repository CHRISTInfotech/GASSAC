from django.contrib import messages
from django.shortcuts import redirect, render


TEAM = [
    ("Dr. Tejaswini Patil", "President"),
    ("Prof. Jagruti Patel", "Vice President"),
    ("Dr. Ajabrao Ingle", "Secretary"),
    ("Dr. Basavaraj Yallur", "Joint Secretary"),
    ("Dr. Jyoti Wakode", "Treasurer"),
    ("Dr. Sunil Shinde", "Deputy Treasurer"),
    ("Dr. Diksha Kadam", "Coordinator"),
    ("Dr. Sachin Chavan", "Executive Member"),
    ("Dr. Savita Patil", "Executive Member"),
    ("Dr. Gajanan Tayde", "Executive Member"),
    ("Dr. Vibhuti Khedekar", "Executive Member"),
    ("Dr. Chumki Biswas", "Executive Member"),
    ("Dr. Ram Gaikwad", "Executive Member"),
    ("Prof. Kalpesh Patkar", "Executive Member"),
    ("Dr. Navodita Bhatt", "Executive Member"),
]


def home(request): return render(request, "website/home.html")
def about(request): return render(request, "website/about.html")
def team(request): return render(request, "website/team.html", {"team": TEAM})
def activities(request): return render(request, "website/activities.html")
def membership(request): return render(request, "website/membership.html")


def contact(request):
    if request.method == "POST":
        messages.success(request, "Thank you. Your enquiry has been received.")
        return redirect("website:contact")
    return render(request, "website/contact.html")
