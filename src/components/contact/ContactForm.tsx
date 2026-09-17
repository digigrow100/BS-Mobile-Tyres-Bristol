import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Mobile Tyre Fitting",
  "Jump Start",
  "Fuel Delivery",
  "Emergency Tyre Fitting",
  "Home Tyre Fitting",
  "Car Recovery",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7">
      <div className="p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Request Mobile Tyre Assistance</h2>
          <p className="font-body-md text-body-md text-secondary mt-space-xs">
            Fill out the details below and we will get back to you promptly.
          </p>
        </div>
        {submitted ? (
          <div className="rounded-xl bg-emerald-50 text-emerald-800 p-space-md font-body-md text-body-md">
            Your request has been received. If this is urgent, please call{" "}
            <a className="font-bold underline" href="tel:07338430008">
              07338430008
            </a>{" "}
            directly.
          </div>
        ) : (
          <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="full-name">
                Name
              </label>
              <input
                className="w-full px-space-md py-space-sm bg-surface rounded-xl font-body-md text-on-surface placeholder:text-secondary/60 focus:outline-none focus:bg-surface-container-lowest shadow-inner"
                id="full-name"
                placeholder="Your full name"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="phone-number">
                Phone Number
              </label>
              <input
                className="w-full px-space-md py-space-sm bg-surface rounded-xl font-body-md text-on-surface placeholder:text-secondary/60 focus:outline-none focus:bg-surface-container-lowest shadow-inner"
                id="phone-number"
                placeholder="e.g. 07123 456789"
                required
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="service-type">
                Service Required
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none px-space-md py-space-sm bg-surface rounded-xl font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-inner cursor-pointer"
                  id="service-type"
                  required
                  defaultValue=""
                >
                  <option disabled value="">
                    Select a required service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="location-input">
                Location / Postcode
              </label>
              <input
                className="w-full px-space-md py-space-sm bg-surface rounded-xl font-body-md text-on-surface placeholder:text-secondary/60 focus:outline-none focus:bg-surface-container-lowest shadow-inner"
                id="location-input"
                placeholder="e.g. BS1, BS8, M32 Junction 1..."
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="message-input">
                Message
              </label>
              <textarea
                className="w-full px-space-md py-space-sm bg-surface rounded-xl font-body-md text-on-surface placeholder:text-secondary/60 focus:outline-none focus:bg-surface-container-lowest resize-y shadow-inner"
                id="message-input"
                placeholder="Describe your vehicle and tyre/roadside issue..."
                rows={4}
              />
            </div>
            <div className="pt-space-xs">
              <button
                className="w-full py-3.5 rounded-xl bg-[#FACC15] text-[#0F172A] font-title-sm text-title-sm font-bold hover:bg-[#eab308] transition-colors shadow-sm focus:outline-none"
                type="submit"
              >
                Request Assistance
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
