# Workshop Booking UI — Redesign

This project was about fixing up the front end of a workshop booking app that already existed.
The old version worked okay but looked pretty plain, with not much organization and it did not handle phones well at all.
I wanted to make it nicer to use, more straightforward, especially by switching to React for the interface.

---

## What Changed

I changed a few main things to improve it. Like turning the whole layout into cards, which I think helps when you are scanning for workshops.
Added better spacing and headings so stuff does not feel crammed.
The navigation got a redesign too, simpler buttons to jump around sections.
Put in a hero area at the top to welcome people right away.
The booking form is cleaner now, less confusing fields.
For seats, I used those bar things to show how many are left, visually.
Threw in some buttons that respond when clicked and scrolling that is smooth.

---

## Design Approach

Keeping it simple was the main idea. Not too fancy, so first timers get it quick.
Since its for students on mobiles a lot, I aimed for that.
Stuck with plain CSS and React basics, no big libraries to slow it down or make code hard to follow.

---

## Responsiveness

On responsiveness, I used Flexbox mostly. Cards stack up fine on small screens, no overlap mess.
Tweaked the gaps and button sizes so fingers hit them easily on touch.

---

## Trade-offs

Some choices I made, like skipping animations because they would make it heavier.
Did not touch the back end at all, just front stuff.
Kept features basic — clarity first over piling on extras.

---

## Challenges

It was tricky turning that flat old layout into something structured without going overboard.
Balancing modern looks with keeping it simple felt off sometimes.
Getting it to work across phones, tablets, desktops took a bunch of testing.

---

## Before vs After

Before, the Django version was just basic, minimal styles, not much flow or mobile fit.

After with React, it's cleaner, cards for workshops, better nav, smoother user path. Mobile handles way better now.

> Screenshots would go here to compare.

---

## Tech Stack

- React.js for the build
- Custom CSS
- React Router for moving between pages simply

---

## Summary

Overall, this makes the booking system easier to use and looks better, without extra junk.
Focus stayed on user experience, I guess thats the key part.
It seems like it could use more if time allowed, but for now its solid.