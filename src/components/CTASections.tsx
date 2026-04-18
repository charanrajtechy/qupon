import { Section } from "./Section";
import { StoreButtons } from "./StoreButtons";

export function SellerCTA() {
  return (
    <Section>
      <div className="bg-gradient-primary rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center text-primary-foreground shadow-glow">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
          Have unused coupons? Don't let them go to waste.
        </h2>
        <p className="mt-5 text-base sm:text-lg opacity-90 max-w-xl mx-auto">
          Upload, verify, and earn instantly through the Qupon app.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons size="lg" androidLabel="Sell on Android" iosLabel="Sell on iOS" />
        </div>
      </div>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <Section className="text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-2xl mx-auto">
        Start saving — or earning — today.
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
        Join 100,000+ users on India's most trusted peer-to-peer coupon marketplace.
      </p>
      <div className="mt-8 flex justify-center">
        <StoreButtons size="lg" />
      </div>
    </Section>
  );
}
