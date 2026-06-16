import Image from "next/image";

/**
 * Bolha do hero (PNG estático, "de lado").
 *
 * BASE_ROTATION: orientação fixa da bolha (em graus). Ajuste para girar a
 * posição em que ela fica parada.
 */
const BASE_ROTATION = 90;

export function HeroBlob() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[6%] top-1/2 z-[5] hidden w-[clamp(320px,28vw,520px)] -translate-y-1/2 lg:block"
    >
      <Image
        src="/bloob_parafuso_gradiente.png"
        alt=""
        width={520}
        height={520}
        priority
        style={{ transform: `rotate(${BASE_ROTATION}deg)` }}
        className="h-auto w-full"
      />
    </div>
  );
}
