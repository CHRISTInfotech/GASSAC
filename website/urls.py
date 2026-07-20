from django.urls import path
from . import views

app_name = "website"
urlpatterns = [
    path("", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("team/", views.team, name="team"),
    path("activities/", views.activities, name="activities"),
    path("membership/", views.membership, name="membership"),
    path("contact/", views.contact, name="contact"),
]
