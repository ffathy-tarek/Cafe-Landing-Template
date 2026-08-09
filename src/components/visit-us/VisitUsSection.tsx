import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { branches } from "../../data/branches";
import { contact } from "../../data/contact";
import { useLocaleString, useOptionalLocaleString } from "../../hooks/useLocaleString";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export function VisitUsSection() {
  const activeBranch = siteConfig.multiBranch
    ? branches[0] // In a full implementation, you'd iterate or use tabs here
    : branches.find(b => b.id === siteConfig.activeBranch) || branches[0];

  const callUsText = useOptionalLocaleString({ en: "Call Us", ar: "اتصل بنا" });
  const directionsText = useOptionalLocaleString({ en: "Get Directions", ar: "احصل على الاتجاهات" });

  if (!activeBranch) return null;

  return (
    <section id="visit-us" className="py-20 md:py-28 bg-surface-light border-y border-border scroll-mt-24 w-full flex justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        style={{ backgroundImage: "url('/images/visit_us/photo.png')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      <Container className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeader
          title={{ en: "Visit Us", ar: "موقعنا" }}
          subtitle={{
            en: "We'd love to welcome you. Find our location and opening hours below.",
            ar: "نسعد بزيارتكم. تعرف على موقعنا ومواعيد العمل أدناه.",
          }}
          kicker={{ en: "Location", ar: "الموقع" }}
        />

        <div className="w-full max-w-2xl mx-auto mt-8">
          <BranchCard 
            branch={activeBranch} 
            callUsText={callUsText} 
            directionsText={directionsText} 
          />
        </div>
      </Container>
    </section>
  );
}

function BranchCard({ 
  branch, 
  callUsText, 
  directionsText 
}: { 
  branch: typeof branches[0];
  callUsText?: string;
  directionsText?: string;
}) {
  const branchName = useOptionalLocaleString(branch.name);
  const address = useLocaleString(branch.address);
  const openingHours = useOptionalLocaleString(branch.openingHours);

  // Generate a fallback Google Maps link if mapUrl isn't provided
  const mapLink = branch.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="card-premium relative bg-black/60 backdrop-blur-md border border-white/25 shadow-[0_20px_50px_rgba_0,_0,_0,_0.8)] p-6 md:p-8 rounded-2xl flex flex-col items-center text-center gap-7 w-full">
      {/* Branch Name & Info */}
      <div className="w-full flex flex-col items-center gap-6">
        {siteConfig.multiBranch && branchName && (
          <h3 className="text-subheading text-accent-light text-center" style={{ fontFamily: "var(--font-heading)" }}>
            {branchName}
          </h3>
        )}

        <div className="flex flex-col items-center gap-4 w-full">
          {/* Address */}
          <div className="flex items-center justify-center gap-3 text-center">
            <span className="w-10 h-10 shrink-0 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center text-accent-light">
              <MapPin size={18} />
            </span>
            <p className="text-body text-cream leading-relaxed">{address}</p>
          </div>

          {/* Opening Hours */}
          {openingHours && (
            <div className="flex items-center justify-center gap-3 text-center">
              <span className="w-10 h-10 shrink-0 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center text-accent-light">
                <Clock size={18} />
              </span>
              <p className="text-body text-muted leading-relaxed whitespace-pre-line">
                {openingHours}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg pt-2">
        {contact.phone && (
          <Button
            as="a"
            href={`tel:${contact.phone}`}
            variant="primary"
            iconStart={<Phone size={18} />}
            className="w-full sm:w-auto flex-1 justify-center"
          >
            {callUsText}
          </Button>
        )}

        {contact.whatsappUrl && (
          <Button
            as="a"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            iconStart={<MessageCircle size={18} />}
            className="w-full sm:w-auto flex-1 justify-center border-accent/40 text-accent-light hover:bg-accent hover:text-white hover:border-accent"
          >
            WhatsApp
          </Button>
        )}

        <Button
          as="a"
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          iconStart={<MapPin size={18} />}
          className="w-full sm:w-auto flex-1 justify-center"
        >
          {directionsText}
        </Button>
      </div>
    </div>
  );
}