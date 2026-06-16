import Image from "next/image";

import { clients } from "./clients";

/**
 * Esteira de logos que rotaciona infinitamente.
 *
 * A lista é renderizada DUAS vezes; a animação desloca a faixa em -50%
 * (= largura de uma cópia) e reinicia, então o movimento é contínuo e sem
 * emenda. Cada item usa margem à direita (em vez de gap) para que as duas
 * cópias tenham exatamente a mesma largura.
 *
 * É CSS puro (sem JS): pausa no hover e respeita prefers-reduced-motion.
 */
export function LogoMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="animate-marquee flex w-max items-center [animation:marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
        {items.map((client, index) => (
          <li
            key={`${client.name}-${index}`}
            aria-hidden={index >= clients.length}
            className="mr-12 shrink-0 md:mr-20"
          >
            <Image
              src={client.src}
              alt={index < clients.length ? client.name : ""}
              width={200}
              height={80}
              className={`w-auto object-contain opacity-80 transition duration-200 hover:opacity-100 ${
                client.sizeClass ?? "h-12 md:h-16"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
