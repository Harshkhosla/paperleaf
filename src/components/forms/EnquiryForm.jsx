import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import { products } from "../../data/products.js";

export default function EnquiryForm() {
  const [params] = useSearchParams();
  const presetSlug = params.get("product") || "";

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      product: presetSlug,
      quantity: "",
      message: "",
    },
  });

  useEffect(() => {
    if (presetSlug) setValue("product", presetSlug);
  }, [presetSlug, setValue]);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    console.info("Enquiry submitted:", data);
    toast.success("Thanks! Our team will reach out within 24 hours.");
    reset({
      name: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input
            type="text"
            placeholder="Jane Doe"
            className={inputClass(errors.name)}
            {...register("name", { required: "Name is required", minLength: { value: 2, message: "Too short" } })}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            placeholder="you@example.com"
            className={inputClass(errors.email)}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
            })}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            placeholder="+91 98000 12345"
            className={inputClass(errors.phone)}
            {...register("phone", {
              required: "Phone is required",
              minLength: { value: 7, message: "Too short" },
            })}
          />
        </Field>
        <Field label="Company / Brand" error={errors.company?.message}>
          <input
            type="text"
            placeholder="Optional"
            className={inputClass(errors.company)}
            {...register("company")}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Product" error={errors.product?.message}>
          <select
            className={inputClass(errors.product)}
            {...register("product", { required: "Please pick a product" })}
          >
            <option value="">Select a product…</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated quantity" error={errors.quantity?.message}>
          <input
            type="text"
            placeholder="e.g. 50,000 pcs / month"
            className={inputClass(errors.quantity)}
            {...register("quantity")}
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={4}
          placeholder="Tell us about your sizes, branding and timelines."
          className={inputClass(errors.message)}
          {...register("message", { required: "A short message helps us respond" })}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : (<>Send Enquiry <Send className="h-4 w-4" /></>)}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return [
    "w-full rounded-xl border bg-white px-4 py-3 text-sm shadow-sm",
    "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400",
    error ? "border-rose-300" : "border-cream-200",
  ].join(" ");
}
