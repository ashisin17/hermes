import React, { useContext } from "react";
import "../output.css"; // Ensure Tailwind CSS is imported
import { TravelContext } from "../context/TravelContext";

export default function ChatSection() {
  const { formData } = useContext(TravelContext);

  if (formData.destination.toLowerCase() === "london") {
    return (
      <div className="mt-12 mr-3 mb-20">
        <div className="max-w-xl mx-auto px-5 font-sans overflow-y-scroll h-[600px]">
          <h1 className="text-2xl font-bold text-center text-gray">
            London Trip Plan
          </h1>

          <div className="border-b border-gray-300 py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 1: Arrival and Exploring Central London
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Morning: Arrival</h3>
              <p>
                Arrive in London and check into your accommodation. Consider a
                centrally located hotel like the Premier Inn London County Hall
                or an Airbnb in the Covent Garden area. Budget approximately
                $400 for 3 nights.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: The British Museum
              </h3>
              <p>
                Head to the British Museum (free entry). Spend a few hours
                exploring its vast collection of art and artifacts from around
                the world.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Dinner and Shopping at Covent Garden
              </h3>
              <p>
                Enjoy dinner at a mid-range restaurant in Covent Garden, such as
                Dishoom or The Ivy Market Grill. Budget around $100 for the
                meal.
              </p>
              <p>
                Explore Covent Garden Market for some evening shopping and
                street performances.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 2: Museums and Shopping
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: The Victoria and Albert Museum
              </h3>
              <p>
                Visit the Victoria and Albert Museum (free entry). It's known
                for its extensive collection of art and design.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Lunch and Natural History Museum
              </h3>
              <p>Have lunch at a nearby café. Budget around $50.</p>
              <p>
                Head to the Natural History Museum (free entry). Explore the
                fascinating exhibits, including the dinosaur skeletons and the
                impressive blue whale model.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Harrods and Knightsbridge Shopping
              </h3>
              <p>
                Take the tube to Knightsbridge and visit Harrods for some luxury
                shopping and sightseeing.
              </p>
              <p>
                Enjoy dinner at a nearby restaurant, such as Hawksmoor
                Knightsbridge. Budget around $150.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 3: More Museums and Shopping
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Morning: Tate Modern</h3>
              <p>
                Visit the Tate Modern (free entry) on the South Bank of the
                Thames. Explore its impressive collection of contemporary and
                modern art.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Borough Market and Lunch
              </h3>
              <p>
                Walk along the South Bank to Borough Market for lunch. Budget
                around $50.
              </p>
              <p>
                Explore the market, then walk to nearby shops along the Thames
                or visit the Globe Theatre for a historical experience.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Oxford Street and Regent Street Shopping
              </h3>
              <p>
                Head to Oxford Street and Regent Street for an extensive
                shopping experience. Visit famous stores like Selfridges,
                Liberty, and Hamleys.
              </p>
              <p>
                Conclude your trip with dinner in Soho, which offers a variety
                of restaurants. Budget around $150.
              </p>
            </div>
          </div>

          <div className="py-5">
            <h2 className="text-xl text-red mb-2 font-bold">
              Budget Breakdown:
            </h2>
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
  } else if (formData.destination.toLowerCase() === "athens") {
    return (
      <div className="mt-12 mr-3 mb-20">
        <div className="max-w-xl mx-auto px-5 font-sans overflow-y-scroll h-[600px]">
          <h1 className="text-2xl font-bold text-center text-gray">
            Athens Trip Plan
          </h1>

          <div className="border-b border-gray-300 py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 1: Arrival and Exploring Central Athens{" "}
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Morning: Arrival</h3>
              <p>
                {" "}
                Accommodation Check-In: Arrive in Athens and check into a
                centrally located hotel such as the Electra Palace Hotel or an
                Airbnb in the Plaka neighborhood. These locations offer easy
                access to major attractions and great dining options.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Acropolis and Plaka
              </h3>
              <p>
                Acropolis: Visit the Acropolis, including the Parthenon,
                Erechtheion, and Temple of Athena Nike. Entry fee is around €20
                per adult, children under 18 enter for free.
              </p>

              <p>
                Acropolis Museum: Explore the museum which houses artifacts from
                the Acropolis. Admission is €10 per adult.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Dinner and Stroll in Plaka
              </h3>
              <p>
                Dinner at Manas Kouzina-Kouzina: Enjoy traditional Greek dishes
                in a cozy atmosphere. Budget around €80-€100 for the family.
              </p>
              <p>
                Evening Stroll in Plaka: Wander through the charming streets of
                Plaka, known for its neoclassical architecture, shops, and
                cafes.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 2: Ancient Sites and Culinary Delights
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Temple of Olympian Zeus and Panathenaic Stadium
              </h3>
              <p>
                Temple of Olympian Zeus: Visit this colossal temple. Entry fee
                is included in the combo ticket for the Acropolis.
              </p>
              <p>
                Panathenaic Stadium: Explore the site of the first modern
                Olympic Games. Entrance fee is €5 per adult, children under 6
                are free.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Central Market and Lunch
              </h3>
              <p>
                Athens Central Market: Visit the vibrant Varvakios Agora for a
                glimpse of local life and to sample fresh produce, meats, and
                cheeses.
              </p>
              <p>
                Lunch at Klimataria: A traditional taverna near the market
                offering authentic Greek cuisine. Budget around €60-€80 for the
                family.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: National Garden and Dinner
              </h3>
              <p>
                National Garden: Take a leisurely walk through this beautiful
                garden near the Parliament building.
              </p>
              <p>
                Dinner at Oineas Restaurant: Located in Psiri, this restaurant
                offers a mix of traditional and modern Greek dishes. Budget
                around €80-€100 for the family.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 3: Day Trip to Sounion and Cape Sounion
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Travel to Cape Sounion
              </h3>
              <p>
                Car Rental: Rent a car for the day to visit Cape Sounion, about
                1.5 hours from Athens. The drive along the coast offers stunning
                views.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Temple of Poseidon and Lunch
              </h3>
              <p>
                Temple of Poseidon: Visit this ancient temple with spectacular
                views over the Aegean Sea. Entrance fee is €10 per adult.
              </p>
              <p>
                Lunch at a Seaside Taverna: Enjoy fresh seafood at a local
                taverna by the sea. Budget around €70-€90 for the family.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Return to Athens and Dinner
              </h3>
              <p>
                Return to Athens: Drive back to Athens in the late afternoon.
              </p>
              <p>
                Dinner at Ta Karamanlidika tou Fani: Enjoy a meze-style dinner
                with a variety of small dishes. Budget around €80-€100 for the
                family.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 4: Museums and Departure
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Benaki Museum and Byzantine Museum
              </h3>
              <p>
                Benaki Museum: Explore the extensive collection of Greek art and
                artifacts. Admission is €12 per adult, free for children under
                18.
              </p>
              <p>
                Byzantine and Christian Museum: Discover the rich history of
                Byzantine art. Entrance fee is €8 per adult, children under 18
                enter for free.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Lunch and Last-Minute Shopping
              </h3>
              <p>
                Lunch at Aleria Restaurant: Enjoy a refined Greek dining
                experience. Budget around €100-€120 for the family.
              </p>
              <p>
                Monastiraki Flea Market: Shop for souvenirs and explore the
                lively market area.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Evening: Departure</h3>
              <p>
                Return to Accommodation: Pack and prepare for your departure.
              </p>
              <p>
                Dinner at Strofi: Have a final dinner with a view of the
                Acropolis. Budget around €100-€120 for the family.
              </p>
              <p>
                Transfer to Airport: Arrange for a taxi or private transfer to
                the airport.
              </p>
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-xl text-red mb-2 font-bold">
              Budget Breakdown:
            </h2>
            <ul className="list-none pl-0 text-medium">
              <li>Accommodation: $1500 for 3 nights</li>
              <li>Meals: $1200 (4 days)</li>
              <li>Lunches: $150 (3 lunches at $50 each)</li>
              <li>Entrance Fees and Activities: $400</li>
              <li>Transportation (including day trip): $400</li>
              <li>Shopping and Souvenirs: $300</li>
              <li>Miscellaneous: $200</li>
              <li className="font-bold">
                Total: $4000 (leaving a buffer of $1000)
              </li>
            </ul>
          </div>
          <div className="py-5">
            <h2 className="text-xl text-gray mb-2 font-bold">
              Additional Tips:
            </h2>
            <ul className="list-none pl-0 text-medium">
              <li>
                Weather: December in Athens can be cool and rainy, so pack
                accordingly.
              </li>
              <li>
                Transportation: Public transport and walking are convenient for
                most central Athens attractions.
              </li>
              <li>
                Reservations: Make reservations for popular restaurants and
                tours in advance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (formData.destination.toLowerCase() === "mexico city") {
    return (
      <div className="mt-12 mr-3 mb-20">
        <div className="max-w-xl mx-auto px-5 font-sans overflow-y-scroll h-[600px]">
          <h1 className="text-2xl font-bold text-center text-gray">
            Mexico City Trip Plan
          </h1>

          <div className="border-b border-gray-300 py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 1: Arrival and Exploring Mexico City{" "}
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Morning: Arrival</h3>
              <p>
                {" "}
                Accommodation Check-In: Arrive in Mexico City and check into a
                centrally located hotel like Hotel Catedral or an Airbnb in the
                historic center. This area is convenient for exploring the city
                and starting day trips.
              </p>
              <p>
                Hotel Catedral: Centrally located, offers good value for comfort
                and convenience.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Historic Center and Chapultepec Castle
              </h3>
              <p>
                Zócalo: Visit the main square, surrounded by the Metropolitan
                Cathedral and National Palace.
              </p>

              <p>
                Lunch at Café de Tacuba: Enjoy traditional Mexican cuisine in a
                historic setting.
              </p>

              <p>
                Chapultepec Castle: Located in Chapultepec Park, this castle
                offers stunning views of the city. Entrance fee is around $4.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Dinner and Stroll
              </h3>
              <p>
                Dinner at Azul Historico: Located in a beautiful courtyard,
                offering delicious Mexican dishes.
              </p>
              <p>
                Evening Stroll: Walk around the historic center, enjoying the
                lively atmosphere and architecture.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 2: Day Trip to Nevado de Toluca
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Travel to Nevado de Toluca
              </h3>
              <p>
                Car Rental: Rent a car or hire a driver for the day to visit
                Nevado de Toluca, about 2 hours from Mexico City.
              </p>

              <p>
                Nevado de Toluca: This extinct volcano offers stunning mountain
                views and two crater lakes, Lago del Sol and Lago de la Luna.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Hiking and Exploration
              </h3>
              <p>
                Hiking: Explore the trails around the crater. Bring warm
                clothing as temperatures can be low at higher altitudes.
              </p>
              <p>
                Lunch: Pack a picnic or enjoy local food at the base of the
                mountain.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Return to Mexico City
              </h3>
              <p>
                Dinner at Lalo!: A casual eatery with a lively atmosphere and
                great food.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 3: Day Trip to Tepozteco and Tepoztlán
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Travel to Tepoztlán
              </h3>
              <p>
                Transportation: Take a bus or drive to Tepoztlán, about 1.5
                hours from Mexico City.
              </p>
              <p>
                Tepozteco Pyramid: Hike up to this ancient pyramid for panoramic
                views of the surrounding mountains.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Explore Tepoztlán
              </h3>
              <p>
                Lunch at Los Colorines: A colorful restaurant known for
                traditional Mexican dishes.
              </p>
              <p>
                Explore Tepoztlán: Wander through the cobblestone streets, visit
                local markets, and enjoy the town’s unique charm.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Return to Mexico City
              </h3>
              <p>
                Dinner at Pujol: One of Mexico City's top restaurants, known for
                its innovative Mexican cuisine (make a reservation in advance).
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 4: Remote Locations and Departure
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Desierto de los Leones National Park
              </h3>
              <p>
                Travel to Desierto de los Leones: Located about 45 minutes from
                Mexico City, this national park offers beautiful forested areas
                and mountain views.
              </p>

              <p>
                Hiking and Exploration: Enjoy the serene environment and visit
                the old Carmelite convent.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Lunch and Relaxation
              </h3>
              <p>
                Lunch at a Local Restaurant: Enjoy a meal at one of the local
                eateries near the park.
              </p>
              <p>
                Relax and Explore: Spend more time exploring the park or return
                to Mexico City for some last-minute sightseeing or shopping.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Evening: Departure</h3>
              <p>
                Return to Accommodation: Pack and prepare for your departure.
              </p>
              <p>
                Dinner at Contramar: Enjoy a final meal in Mexico City, known
                for its seafood dishes.
              </p>
            </div>
          </div>

          <div className="py-5">
            <h2 className="text-xl text-gray mb-2 font-bold">
              Additional Tips:
            </h2>
            <ul className="list-none pl-0 text-medium">
              <li>
                Transportation: Renting a car is recommended for day trips to
                remote locations. Alternatively, consider hiring a driver or
                joining guided tours.
              </li>
              <li>
                Weather: October is generally pleasant in Mexico City, but
                mountain areas can be cooler. Pack accordingly.
              </li>
              <li>
                Safety: Always prioritize safety when traveling to remote areas.
                Let someone know your itinerary and travel during daylight
                hours.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (formData.destination.toLowerCase() === "venice") {
    return (
      <div className="mt-12 mr-3 mb-20">
        <div className="max-w-xl mx-auto px-5 font-sans overflow-y-scroll h-[600px]">
          <h1 className="text-2xl font-bold text-center text-gray">
            Venice Trip Plan
          </h1>

          <div className="border-b border-gray-300 py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 1: Arrival and Exploring Venice
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Morning: Arrival</h3>
              <p>
                Accommodation Check-In: Arrive in Venice and check into a
                centrally located hotel such as Hotel Rialto or an Airbnb near
                St. Mark’s Square. Budget approximately $600 for 2 nights
              </p>
              <p>Hotel Rialto: Overlooks the Grand Canal and Rialto Bridge.</p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: St. Mark’s Square and Basilica
              </h3>
              <p>
                St. Mark’s Square (Piazza San Marco): Visit one of Venice’s most
                famous landmarks.
              </p>
              <p>
                St. Mark’s Basilica: Explore the stunning architecture and
                beautiful mosaics. Entrance is free, but there is a small fee
                for accessing certain areas (€5-€7).
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Evening: Scenic Dinner</h3>
              <p>
                Dinner at Ristorante Terrazza Danieli: Offers a rooftop terrace
                with breathtaking views of the Grand Canal. Budget around $150
                for a romantic meal.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Night: Stroll Along the Grand Canal
              </h3>
              <p>
                Grand Canal Walk: Enjoy an evening walk along the Grand Canal,
                taking in the illuminated views of the city.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 2: Scenic Views and Gondola Ride
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Doge’s Palace and Bridge of Sighs
              </h3>
              <p>
                Doge’s Palace (Palazzo Ducale): Tour this historic palace and
                enjoy views from the Bridge of Sighs. Tickets cost around €25
                per person.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Gondola Ride
              </h3>
              <p>
                Gondola Ride: Enjoy a classic gondola ride through Venice’s
                canals. Budget around €80-€100 for a 30-minute ride.
              </p>
              <p>
                Lunch at Trattoria Al Gazzettino: A charming spot for local
                Venetian cuisine. Budget around $60 for lunch.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Evening: Sunset at Rialto Bridge
              </h3>
              <p>
                Rialto Bridge (Ponte di Rialto): Watch the sunset from this
                iconic bridge, offering stunning views of the Grand Canal.
              </p>
              <p>
                Dinner at Al Covo: Known for its seafood and intimate
                atmosphere. Budget around $100 for dinner.
              </p>
            </div>
          </div>

          <div className="border-b border-gray py-5">
            <h2 className="text-xl text-blue mb-2 font-bold">
              Day 3: Islands and Departure
            </h2>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Morning: Murano and Burano Islands
              </h3>
              <p>
                Murano: Famous for its glass-making workshops. Take a Vaporetto
                (water bus) to the island.
              </p>

              <p>
                Burano: Known for its colorful houses and lace-making tradition.
                Enjoy a leisurely stroll and photography.
              </p>

              <p>
                Lunch at Trattoria da Primo e Paolo on Burano: Budget around $50
                for lunch.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">
                Afternoon: Return to Venice and Explore Lesser-Known Spots
              </h3>
              <p>
                Quiet Canals and Hidden Gems: Explore quieter areas of Venice
                like Cannaregio or Dorsoduro for a more local feel.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg text-gray mb-1">Evening: Departure</h3>
              <p>
                Dinner at La Zucca: A cozy restaurant offering a mix of Italian
                and Venetian dishes. Budget around $80 for dinner.
              </p>
              <p>
                Head to Airport: Depending on your flight time, allow enough
                time for travel back to the airport. A water taxi or Vaporetto
                can take you to Marco Polo Airport.
              </p>
            </div>
          </div>

          <div className="py-5">
            <h2 className="text-xl text-red mb-2 font-bold">
              Budget Breakdown:
            </h2>
            <ul className="list-none pl-0 text-medium">
              <li>Accommodation: $600 (2 nights at a mid-range hotel)</li>
              <li>
                Meals: $740 (5 dinners at $80 each, 3 lunches at $60 each, and 2
                breakfasts at $50 each)
              </li>
              <li>Gondola Ride: $100</li>
              <li>
                Sightseeing and Activities: $100 (entrance fees and Vaporetto
                tickets)
              </li>
              <li>
                Miscellaneous/Transport: $160 (local transport and small
                expenses)
              </li>
              <li className="font-bold">Total: $1700</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-12 mr-3 mb-20">
        <div className="max-w-xl mx-auto px-5 font-sans overflow-y-scroll h-[600px]">
          <h1 className="text-2xl font-bold text-center text-gray">
            {" "}
            Yet to Load
          </h1>
        </div>
      </div>
    );
  }
}
