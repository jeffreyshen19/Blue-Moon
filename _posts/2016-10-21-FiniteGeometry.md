---
layout: post
title: An Overview of Finite Geometry
description: "Somehow, geometry with finitely many points is even harder than geometry with infinitely many points"
categories: Math
author: Michael Ren
email: mren@andover.edu
featured: true
img: finite.jpg
---
**1) What is finite geometry?**  
Everyone who graduates from Andover has taken at least one geometry course in their time here or before. Most people struggle with it, but the few people who find it enjoyable soon realize that it is a beautiful subject with lots of cool problems. But just like algebra, once you get to college everyone makes it really complicated and abstract, because why not? The geometry that everyone does is in *Euclidean space*, where everything is nice and flat and square. Other geometries include *Spherical geometry*, where your points and lines and circles are now on the surface of a sphere, *Projective geometry*, where the ratios of distances between points matter much more than the distances themselves, and *Finite geometry*, geometry in a space with finitely many points.<br><br>
Now, you might be thinking, ”Don’t I already do geometry with finitely many points? If I do a problem about a pentagon and a circle, then I only have a few points that I actually care about and will use.” This geometry is even more finite than that. In your regular geometry, though you only use finitely many points on any problem, you will always have an infinite number of points in your space. In a finite geometry, the universe only consists of N points, where N is some positive integer. Lines are now subsets of these points such that there is a unique line that goes through every two points in our universe and there is a unique point that lies on every two lines in our universe, unless they are ”parallel”, which we will define later. The tricky part here is that most finite geometries don’t have any concrete representations where all lines look like lines. As an example, here is a finite geometry with 9 points and 12 lines, known as the *finite affine plane of order 3* or the *Hesse configuration*:<br>
![Hesse](/Assets/Article/hesse.png)
<br>
All black paths in this diagram represent lines in the geometry. You can indeed see that every two points lie on a unique line and that every two lines intersect at one point (unless they are parallel).<br><br>
**2) Axioms of finite geometry and finite projective geometry**<br>
Now that we have a general sense of what a finite geometry is, lets go over the rigorous definition of it from the basic axioms:<br>
  1. Every two points lie on exactly one line.
  2. Given a line and a point not on it, there is at most one line through that point that does not intersect the line. If two lines don’t intersect, then they are parallel. (This is known as *Playfair’s Axiom* and is a property of our regular old Euclidean geometry as well as finite geometry.)
  3. There are four points, no three of which lie on a line. This is to ensure that the geometry doesn’t just consist of a bunch of points all on a line, which is pretty boring.<br><br>
There is also an analogue of projective geometry in finite geometry. Projective geometry has the property that every two lines intersect, along with all of the other properties of Euclidean geometry. To account for parallel lines, points at infinity are added to our set of points. Each point at infinity corresponds with one value of the slope of a line, and every line with that slope passes through it. All parallel lines with one slope then all pass through that infinity point. Finite geometries like this exist too, but we don’t need points at infinity because there are only a finite number of points. However, when connecting projective finite geometries to things we can understand, it might be helpful to think of some points as the ”point at infinity”, even though it’s just another point in the geometry. The axioms of finite projective geometry are the same, except the condition in the second one is that any two lines intersect instead. Here is the simplest example of a projective finite geometry, known as the *projective plane of order 2* or the *Fano plane.*

<br>
![Triangle](/Assets/Article/triangle.jpg)
<br>
This geometry has 7 points 7 lines. The circle in the middle there is actually a line. It is shown like that because there is no good way to draw it. You might have a hard time with finite geometry if you think of lines as lines instead of subsets of the points. We can actually think of the circle there as the line at infinity containing all of the points at infinity. The finite affine plane of order 2 looks like this:
<br>
![Order 2 Affine Plane](/Assets/Article/order2affine.png)
<br>
Note that every two lines intersect, except for the pairs of parallel lines *AB || CD*, *AC || BD*, and *AD || BC*. When we extend an affine plane to a projective plane, we add in the points at infinity and put them all on the line at infinity. Of course, we can think of any of those lines as the line at infinity, but because of symmetry the circle is preferred.<br><br>
**3) Affine?**  
I’m throwing around a lot of terms like affine. Before moving on, let’s go over what this means and unpack the term ’finite affine plane of order 3’. An informal definition of an affine space is just a plane or space without an origin. Now, the idea is that operations with vectors and linear transformations (and a translation) in this space are still preserved and are independent of where the origin is. More formally, it has to be a vector space over a field. (A field is just a set of numbers with the property that you can add, subtract, multiply,
divide by nonzero numbers like usual.) In finite geometries we will consider
finite fields rather than infinite ones like the set of rational numbers or the set
of real numbers. For those that know modular arithmetic, the most basic finite
fields are those that consist of the residues modulo a prime *p*, denoted by $$\mathbb{F}_p$$ or
the finite field of order 3. Sound familiar? To get the finite affine plane of order
3, we simply take a 2-dimensional vector space of $$\mathbb{F}_3$$. What we end up with
is the Hesse configuration. Now, we define the slope of the line through points
*(x1, y1)* and *(x2, y2)* as $$\frac{x_1-x_2}{y_1-y_2}$$, where this fraction may be undefined. In our configuration below, all points have 4 lines passing through them that consist of all possible slopes, and all lines contain 3 points. Basically, we took the entire coordinate plane mod 3 and ended up with this:<br>
![Hesse](/Assets/Article/hesse.png)
<br>
Now, projective planes can be constructed similarly. You can also make finite affine spaces, where you take $$\mathbb{F}_p^3$$ instead of $$\mathbb{F}_p^2$$. If you know about field extensions, affine and projective spaces consisting of vector spaces of $$\mathbb{F}_{p^k}$$ can be constructed as well, though they get exponentially more complex.
<br><br>
**4) Finite geometry is unsolved**  
Any regular geometry problem can be put into a coordinate system and ’bashed’ out. This is why mathematicians consider Euclidean geometry to be solved, because a computer can do any problem, given enough time and computation. However, this can’t be done with finite geometry. For example, one of the simplest yet unsolved questions is: For what n does there exist a geometry containing n points? The best guess right now is all prime powers that are not primes, and we can show this with our results above. But showing that non- prime-powers can’t be the number of points in a finite geometry is extremely difficult. A computer search gets too complicated even for small numbers like n = 12, which is still unsolved to this day.
