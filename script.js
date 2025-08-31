const message = `To my dearest mai, maica ⸜(｡˃ ᵕ ˂ )⸝♡

There are no words wide enough to hold what I feel for you, yet I try —

There’s always so much I want to say, but words never seem enough to capture how grateful I am to have you in my life right now.

You’re not just someone who came into my days, you’ve become the part that makes everything lighter, calmer, and so much more meaningful.

Even in the little things you do, things you might think are small, they mean the world to me.

I cherish you in a ways I can’t fully explain, I used to hate this world, this universe and gods but this time I really thankful for whatever it is because out of everyone in this world, I was given the chance to met and know you, and for me that’s the greatest gift I have ever received.

I have been thinking of how should I pour all that I feel over you, but I could not quite find the right words, the right expression.

I don’t always understand myself, some days, I question what I feel, and who I really am, its really hard to put it into words, this confusion and question, but then there’s you :)

I just know that you are something precious, something my heart tells me not to let go of. There’s this quiet voices inside me keeps saying that if I ever lose you, I’ll carry that regret for the rest of my life.

Yet I always feel like I don’t deserve someone as kind as you, after everything I have done to you, I know im such a loser. I don’t really know everything but I know that I had hurt you a lot back then and I always regret that. And yet instead of walking away, you chose to stay.

That kind of forgiveness and patience is something I will never take for granted. I may not feel worthy of you, but please know that I cherish you more than I can explain, and im so grateful for your heart—for the way you choose to see me for who I really am, not for the mistake I made.

I don’t even know why I’m writing this letter right now, its my heart speak louder than my mind, if you finally read this, it means I already losing my mind hahaha because I swear to god I’m not this type of person before I know you.

And just so you know that I would die a thousand times just to see you again in another life.

Even tho at that time I’ll be a fish and you’ll be a sea cockroaches (I would chase after you even to the deepest ocean floor haha)

With all of my heart,
cakuaena`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    const signature = document.querySelector(".signature");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      } else {
        // setelah teks selesai baru munculkan tanda tangan
        setTimeout(() => {
          signature.style.opacity = 1;
        }, 500);
      }
    }

    typeWriter();
  }, 600);
}
