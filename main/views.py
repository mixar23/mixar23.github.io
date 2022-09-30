from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def create_board():
    board = []
    for i in range(0,7):
        for j in range(0,7):
            board[i,j] = 0
    return  board


def index(request):
    return render(request,"main/index.html")


def about(request):
    return render(request,"main/about.html", {"board":create_board})
