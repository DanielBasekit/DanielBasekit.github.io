import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://submit-form.com/lM8hI7LRk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-8 bg-forest-500/10 rounded-3xl border-2 border-forest-500/30 animate-scale-in">
        <div className="w-16 h-16 mx-auto mb-4 text-forest-500">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-charcoal-900 mb-2">
          You're in!
        </h3>
        <p className="text-lg text-charcoal-800">
          Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      {/* Name Input */}
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          placeholder="First name"
          className={`w-full px-6 py-4 rounded-full bg-white border-2 transition-all duration-300 text-lg
            ${errors.name
              ? 'border-red-400 focus:border-red-500'
              : 'border-earth-200 focus:border-forest-500'
            }
            focus:outline-none focus:ring-4 focus:ring-forest-500/20`}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600 px-4">{errors.name.message}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          placeholder="your@email.com"
          className={`w-full px-6 py-4 rounded-full bg-white border-2 transition-all duration-300 text-lg
            ${errors.email
              ? 'border-red-400 focus:border-red-500'
              : 'border-earth-200 focus:border-forest-500'
            }
            focus:outline-none focus:ring-4 focus:ring-forest-500/20`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 px-4">{errors.email.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-forest-500 text-cream-50 font-semibold text-lg rounded-full hover:bg-forest-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Joining...
          </span>
        ) : (
          'Count Me In'
        )}
      </button>

      {errorMessage && (
        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
      )}

      {/* Privacy Note */}
      <p className="text-sm text-charcoal-800/70 text-center pt-2">
        We respect your inbox. Updates only, no spam.
      </p>
    </form>
  );
}
