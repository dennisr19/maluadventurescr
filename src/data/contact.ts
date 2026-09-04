export const contact = {
  phoneDisplay: "+506 6360 4580",
  phoneInternational: "50663604580",
  email: "maluadventurescr@gmail.com",
} as const;

const whatsappMessage = "Hello Malú Adventures, I'd like to ask about a tour.";

export function createWhatsappUrl(message: string) {
  return `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsappUrl(whatsappMessage);
