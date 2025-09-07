// src/components/PaymentPlan.tsx
import React from "react";

type PaymentStep = {
  label: string;
  description?: string;
  id?: string; // opcional para keys estables y analytics
};

type PaymentPlanProps = {
  steps: PaymentStep[];
  id?: string;
  title?: string;
  className?: string;
  headingLevel?: "h2" | "h3" | "h4";
  project?: string;
  /** Negrita del primer token del label (por defecto true) */
  emphasizeFirstToken?: boolean;
  /** Variante visual del badge numerado */
  variant?: "filled" | "outline";
};

const PaymentPlan: React.FC<PaymentPlanProps> = ({
  steps,
  id,
  title,
  className = "",
  headingLevel = "h3",
  project = "",
  emphasizeFirstToken = true,
  variant = "filled",
}) => {
  const Heading = headingLevel;

  return (
    <section
      id={id}
      className={`py-8 text-[#0A2540] ${className}`}
      aria-label={title ?? "Plan de pagos"}
      data-project={project || undefined}
    >
      {title ? (
        <Heading className="mb-4 text-3xl font-semibold">{title}</Heading>
      ) : null}

      <ol className="flex flex-col space-y-5">
        {steps.map((step, index) => {
          const [firstToken, ...restTokens] = step.label.split(" ");
          const restLabel = restTokens.join(" ");
          const numberBadgeBase =
            "flex flex-shrink-0 select-none items-center justify-center rounded-full mr-4 w-8 h-8 font-semibold transition-transform hover:scale-[1.02]";
          const numberBadge =
            variant === "filled"
              ? `${numberBadgeBase} bg-[#0A2540] text-white`
              : `${numberBadgeBase} border border-[#0A2540]/20 text-[#0A2540] bg-white`;

          const labelContent = emphasizeFirstToken ? (
            <>
              <span className="font-semibold">{firstToken}</span>
              {restLabel ? " " + restLabel : ""}
            </>
          ) : (
            step.label
          );

          const aria = `${index + 1}. ${step.label}${
            step.description ? ` — ${step.description}` : ""
          }`;

          return (
            <li
              key={step.id ?? `${index}-${step.label}`}
              className="flex items-center"
              aria-label={aria}
            >
              <span aria-hidden className={numberBadge}>
                {index + 1}
              </span>
              <div>
                <p className="text-[15px] leading-tight">{labelContent}</p>
                {step.description ? (
                  <p className="mt-1 text-[13px] text-[#0A2540]/70">
                    {step.description}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default PaymentPlan;
