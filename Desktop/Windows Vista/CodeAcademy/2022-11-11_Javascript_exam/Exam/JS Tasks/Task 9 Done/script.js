/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

    class Movie
    {
        constructor(title, director, budget)
        {
        this.title = title;
        this.director = director;
        this.budget = budget;
        }

        wasExpensive()
        {
            if(this.budget >= 100000000)
            {
                return true
            }
            else
            {
                return false
            }
        }
    }

    const Indiana_Jones = new Movie("Indiana_Jones_raiders_of_the_lost_arc", "Steven_Spielberg", 20000000);
    const Avatar = new Movie("Avatar", "James_Cameron", 237000000);
    console.log("Was Indiana Jones expensive? " + Indiana_Jones.wasExpensive());
    console.log("Was Avatar expensive? " + Avatar.wasExpensive());

    //Not much to comment code is kinda comments itself.
}