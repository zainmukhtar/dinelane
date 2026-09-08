export default function HeroBanner() {
  return (
    <section className="relative h-125 w-full bg-[url('/assets/images/home-hero-banner.jpg')] bg-cover bg-position-[center_20%]">
      <div className="absolute inset-0 flex items-center justify-center bg-black/80">
        <div>
          <h1 className="relative text-4xl font-bold text-white text-center">
            Welcome to Dinelane
          </h1>
          <p className="relative text-lg text-white mt-4 text-center">
            Order food online from your favorite restaurant and have it
            delivered to your door.
          </p>
        </div>
      </div>
    </section>
  );
}
