import { Link } from "react-router-dom";

const InflationGuide = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-8">
        <Link to="/blogs" className="text-terminal-yellow hover:underline text-sm">
          ← Back to Blogs
        </Link>
      </div>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-4 text-terminal-cyan">
          Why Your Piggy Bank Isn't Getting Any Fatter: A Desi Guide to Inflation
        </h1>
        
        <div className="text-sm text-muted-foreground mb-8">
          <span>Dec 31, 2024</span> · <span>4 min read</span>
        </div>

        <div className="bg-secondary/20 border-l-4 border-terminal-yellow p-4 mb-8 italic text-sm">
          Disclaimer: No samosas were harmed in the making of this article, and any resemblance to real aunties controlling samosa prices is purely coincidental.
        </div>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Great Samosa Situation</h2>
          <p>
            Picture this: Your neighborhood aunty declares, "From today, all samosas will cost ₹10 forever!" Sounds like a dream, right? It's like that time when Emperor Tughlaq (I made him up) tried to introduce copper coins and told everyone they were as valuable as silver ones. Spoiler alert: It worked out about as well as trying to convince your mom that Maggi is a complete nutritious meal.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">When Money Goes Bollywood Drama Queen</h2>
          <p>
            Remember how our grandparents keep telling us that they used to buy a whole month's groceries in ₹100? They're not making it up! Back in their days, you could watch a movie, buy popcorn, and still have change left from a ₹10 note. Today, that same ₹10 barely gets you a candy. That's inflation doing its dance, more dramatic than a K-serial plot twist.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Great Chai Economy</h2>
          <p>
            Let's understand inflation using our national drink — chai. Your favorite tapri used to sell cutting chai for ₹5. Then suddenly, everyone in your IT park gets a Diwali bonus. The chai-wala notices longer lines than a Mumbai local train and thinks, "Hmm… maybe I should charge ₹7?" That's demand-pull inflation — when too many people are chasing the same cutting chai.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Paratha Paradox</h2>
          <p>
            Think of cost-push inflation like this: If the price of cooking gas goes up, your local dhaba owner has to increase paratha prices even if he feels guilty about it. It's like a domino effect — one price pushes up another, faster than gossip spreads in a WhatsApp family group.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Joint Family of Economic Factors</h2>
          
          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">The Dadi (RBI)</h3>
          <p>
            Like every Indian grandmother who controls the house's finances, the Reserve Bank of India controls the nation's money. When inflation runs too high, Dadi RBI increases interest rates faster than she increases the sugar in chai when guests arrive.
          </p>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">The Uncle ji (Government)</h3>
          <p>
            Like that uncle who's always giving financial advice at family functions, the government tries to manage the economy through various policies. Sometimes it works, sometimes it's as useful as trying to eat soup with a fork.
          </p>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">The Three Maharajas of Market Conditions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Raja Inflation:</strong> When prices run hotter than Delhi summers</li>
            <li><strong>Maharaja Stability:</strong> When prices rise as steadily as a Gujarati's business plan</li>
            <li><strong>Nawab Deflation:</strong> When prices fall faster than your mom's expectations when you hit 25 and are still single</li>
          </ul>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The FD Fixation</h2>
          <p>
            Here's why your father's obsession with Fixed Deposits isn't always the best strategy. If inflation is 6% and your FD gives 5.5%, you're actually losing money faster than Rahul loses his wicket in a crucial match. It's like walking up a down escalator — you think you're moving forward, but you're actually going nowhere.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Great Indian Investment Drama</h2>
          
          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">Scene 1: The Gold Rush</h3>
          <p>
            Every Indian aunty's favorite investment — gold. But remember, if everyone bought gold like they buy onions before Diwali, it wouldn't remain precious. It's valuable because it's rarer than a peaceful India-Pakistan cricket match.
          </p>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">Scene 2: The Property Plot</h3>
          <p>
            Your uncle might brag about how the plot he bought for ₹5 lakhs is now worth ₹5 crores. But remember, inflation played a bigger role in this value increase than Amitabh Bachchan has played roles in Bollywood.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">Real-World Tips for Surviving the Money Game (Desi Edition)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Don't be a Miser Uncle:</strong> Keeping all your money in a steel trunk under your bed is as outdated as Doordarshan</li>
            <li><strong>Be like a Gujarati Businessman:</strong> Diversify your investments like they diversify their business interests</li>
            <li><strong>Watch the Signs:</strong> Track prices like your mom tracks your whereabouts on family WhatsApp</li>
            <li><strong>Learn from Dhirubhai:</strong> Start small, think big, but please don't print your own money</li>
          </ol>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Investment Thali</h2>
          <p>Think of your investment portfolio like a good thali — you need a bit of everything:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Some fixed deposits (dal chawal) for stability</li>
            <li>Some mutual funds (sabzi) for growth</li>
            <li>Some gold (dessert) for emergencies</li>
            <li>Some real estate (papad) to add crunch to your portfolio</li>
          </ul>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Tale of Two Cousins</h2>
          <p>
            Meet Sharma ji ka beta and Verma ji ka beta. Sharma ji ka beta panicked about inflation and converted all his savings into cryptocurrency after watching a YouTube guru. Verma ji ka beta learned about balanced investment strategies and diversified his portfolio like a well-planned Indian thali. One year later, Sharma ji ka beta was explaining his investment decisions to disappointed parents, while Verma ji ka beta was planning his Goa trip, his money working harder than an IIT aspirant.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The SIP Symphony</h2>
          <p>
            Monthly SIPs are like your mom's daily sabzi shopping — small, regular investments that add up over time. It's better than throwing all your money at once like you throw colors during Holi.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Zero Inflation Fantasy</h2>
          <p>
            Wanting zero inflation is like wanting a traffic-free day in Mumbai — sounds great in theory, but it's not practical or even desirable. A little inflation is as necessary for the economy as spice is for biryani.
          </p>

          <p className="mt-8 italic">
            Remember folks, trying to avoid inflation completely is like trying to avoid relatives during wedding season — it's impossible and probably not wise. The key is learning to deal with it better than you deal with your nosy relatives asking about your marriage plans.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://medium.com/@theoldregime/why-your-piggy-bank-isnt-getting-any-fatter-a-desi-guide-to-inflation-c3df07c9a3e6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-yellow hover:underline"
          >
            Read original on Medium →
          </a>
        </div>
      </article>
    </div>
  );
};

export default InflationGuide;
