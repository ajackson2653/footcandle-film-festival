import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="container-fc py-14">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl">
          <div>
            <p className="text-muted font-light text-lg leading-relaxed">
              Do you have a question about the Footcandle Film Festival? Please fill out the contact form, and someone
              will be in touch with you shortly!
            </p>
            <div className="mt-8 space-y-3 text-muted font-light">
              <p>
                <span className="text-white font-semibold uppercase tracking-wide">Email:</span>{" "}
                <a href={`mailto:${site.contactEmail}`} className="text-accent hover:text-accent-hover">
                  {site.contactEmail}
                </a>
              </p>
              <p>
                <span className="text-white font-semibold uppercase tracking-wide">Mail:</span> {site.mailingAddress}
              </p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
