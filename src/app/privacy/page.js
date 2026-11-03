export const metadata = { title: "Privacy Policy | SunCart" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">
        Privacy <span className="text-primary">Policy</span>
      </h1>
      <div className="mt-6 space-y-4">
        <p>
          SunCart collects only the information needed to create your account
          and process your orders: your name, email address and profile photo.
        </p>
        <p>
          We never sell your personal data. Your information is used only to
          provide and improve our services.
        </p>
        <p>
          You can update your name and photo at any time from the My Profile
          page. For any privacy question, contact support@suncart.com.
        </p>
      </div>
    </div>
  );
}