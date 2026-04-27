import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function InnovationAndTestimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          eyebrow="What's next"
          title="The Next Chapter of Sustainable Tableware"
          subtitle="Our next-generation tableware is made from 100% biodegradable, food-safe materials — engineered for strength, performance and a healthier planet."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/5] max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=1000&q=80"
              alt="Innovation in tableware"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              loop
              spaceBetween={24}
              slidesPerView={1}
              className="!pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="card p-8 md:p-10 bg-cream-50">
                    <Quote className="h-8 w-8 text-primary-300" />
                    <p className="mt-4 text-lg text-ink leading-relaxed">{t.quote}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-600 text-white font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-ink-mute">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
