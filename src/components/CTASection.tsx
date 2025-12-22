
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    timeline: "",
    source: "",
    consent: false,
  });

  const fieldClass =
    "h-12 rounded-xl bg-white text-black border border-border placeholder:text-black focus:ring-2 focus:ring-accent focus:border-accent transition-all appearance-none";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !prev.consent : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    navigate("/contact", {
      state: {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        streetAddress: formData.street,
        city: formData.city,
        state: formData.state,
        timeline: formData.timeline,
      },
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fffefd]">
      <div className="container mx-auto px-4">
        <div
          className="glass-card rounded-3xl shadow-xl border border-white/20 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center">
              <span className="inline-block w-fit px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Get Started Today
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Sell{" "}
                <span className="text-accent">Without the Stress?</span>
              </h2>

              <p className="text-lg text-white mb-10 max-w-xl">
                Fill out the form and receive a fair, no-obligation cash offer
                within 24 hours. No agents. No fees. No pressure.
              </p>

              <div className="space-y-4 ">
                {[
                  "No obligation or pressure",
                  "100% free consultation",
                  "Response within 24 hours",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="inputs px-8 md:px-12 lg:px-16 py-12 md:py-16  backdrop-blur-sm">
              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto space-y-4"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                  <Input
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </div>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />

                <Input
                  name="street"
                  placeholder="Street Address *"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                  <Input
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>

                {/* SELECTS — BLACK PLACEHOLDER */}
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 text-black ${fieldClass}`}
                >
                  <option value="" className="text-black">
                    How Soon Do You Want To Sell?
                  </option>
                  <option className="text-black">Immediately</option>
                  <option className="text-black">30 Days</option>
                  <option className="text-black">60–90 Days</option>
                  <option className="text-black">Just Exploring</option>
                </select>

                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={`w-full px-3 text-black ${fieldClass}`}
                >
                  <option value="" className="text-black">
                    How did you hear about us?
                  </option>
                  <option className="text-black">Google</option>
                  <option className="text-black">Facebook</option>
                  <option className="text-black">Referral</option>
                  <option className="text-black">Other</option>
                </select>

                <label className="flex items-start gap-3 text-sm text-muted-foreground mt-4">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 accent-accent"
                  />
                  <span className="text-black">
                    Free offer, no pressure. Your info stays private.
                    Opt out anytime.
                  </span>
                </label>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.consent}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 rounded-xl mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get My Cash Offer
                    </>
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
