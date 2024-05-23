import React from "react";
import "../output.css"; // Ensure Tailwind CSS is imported

export default function ChatSection() {
  return (
    <div className="mt-12 ml-6 mb-20">
      <div className="max-w-xl mx-auto px-5 font-sans overflow-y-scroll h-[600px]">
        <h1 className="text-2xl font-bold text-center text-gray">London Trip Plan</h1>

        <div className="border-b border-gray-300 py-5">
          <h2 className="text-xl text-blue mb-2 font-bold">Day 1: Arrival and Exploring Central London</h2>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Morning: Arrival</h3>
            <p>Arrive in London and check into your accommodation. Consider a centrally located hotel like the Premier Inn London County Hall or an Airbnb in the Covent Garden area. Budget approximately $400 for 3 nights.</p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Afternoon: The British Museum</h3>
            <p>Head to the British Museum (free entry). Spend a few hours exploring its vast collection of art and artifacts from around the world.</p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Evening: Dinner and Shopping at Covent Garden</h3>
            <p>Enjoy dinner at a mid-range restaurant in Covent Garden, such as Dishoom or The Ivy Market Grill. Budget around $100 for the meal.</p>
            <p>Explore Covent Garden Market for some evening shopping and street performances.</p>
          </div>
        </div>

        <div className="border-b border-gray py-5">
          <h2 className="text-xl text-blue mb-2 font-bold">Day 2: Museums and Shopping</h2>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Morning: The Victoria and Albert Museum</h3>
            <p>Visit the Victoria and Albert Museum (free entry). It's known for its extensive collection of art and design.</p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Afternoon: Lunch and Natural History Museum</h3>
            <p>Have lunch at a nearby café. Budget around $50.</p>
            <p>Head to the Natural History Museum (free entry). Explore the fascinating exhibits, including the dinosaur skeletons and the impressive blue whale model.</p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Evening: Harrods and Knightsbridge Shopping</h3>
            <p>Take the tube to Knightsbridge and visit Harrods for some luxury shopping and sightseeing.</p>
            <p>Enjoy dinner at a nearby restaurant, such as Hawksmoor Knightsbridge. Budget around $150.</p>
          </div>
        </div>

        <div className="border-b border-gray py-5">
          <h2 className="text-xl text-blue mb-2 font-bold">Day 3: More Museums and Shopping</h2>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Morning: Tate Modern</h3>
            <p>Visit the Tate Modern (free entry) on the South Bank of the Thames. Explore its impressive collection of contemporary and modern art.</p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Afternoon: Borough Market and Lunch</h3>
            <p>Walk along the South Bank to Borough Market for lunch. Budget around $50.</p>
            <p>Explore the market, then walk to nearby shops along the Thames or visit the Globe Theatre for a historical experience.</p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg text-gray mb-1">Evening: Oxford Street and Regent Street Shopping</h3>
            <p>Head to Oxford Street and Regent Street for an extensive shopping experience. Visit famous stores like Selfridges, Liberty, and Hamleys.</p>
            <p>Conclude your trip with dinner in Soho, which offers a variety of restaurants. Budget around $150.</p>
          </div>
        </div>

        <div className="py-5">
          <h2 className="text-xl text-red mb-2 font-bold">Budget Breakdown:</h2>
          <ul className="list-none pl-0 text-medium">
            <li>Accommodation: $400</li>
            <li>Meals: $450 (3 dinners at $150 each)</li>
            <li>Lunches: $150 (3 lunches at $50 each)</li>
            <li>Transport: $150 (Oyster cards for 3 people)</li>
            <li>Shopping and souvenirs: $350</li>
            <li className="font-bold">Total: $1500</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
