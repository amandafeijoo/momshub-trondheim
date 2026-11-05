from django.urls import path
from .views import UpcomingEventListView

urlpatterns = [
    path(
        "",
        UpcomingEventListView.as_view(),
        name="upcoming-events",
    ),
]