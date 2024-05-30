import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { submitAPI } from '../../utils/utils.js';

export const BookingForm = ({ availableTimes, dispatch, ...props }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: '',
      time: availableTimes.times[0],
      guests: 1,
      occasion: 'birthday'
    },
    onSubmit: (values) => {
      const response = submitAPI(values);
      if (response) {
        localStorage.setItem('Bookings', JSON.stringify(values));
        navigate('/confirmation');
        console.log(values);
      }

    },
    validationSchema: Yup.object({
      date: Yup.date().required('A date is required'),
      time: Yup.string().oneOf(availableTimes.times).required('A time for booking is required'),
      guests: Yup.number().min(1, 'Booking must be for at least be one person').max(10, 'Booking cannot be for more than 10 persons').required('Number of guests is required'),
      occasion: Yup.string().oneOf(['birthday', 'engagement', 'anniversary']).required('Occasion is required')
    })
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
    <>
      <form
        className="grid manx-w-4xl gap-3 text-2xl mb-12"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <label htmlFor="booking-date">Choose date</label>
        <input className="border border-gray-600 p-6 mb-3"
               type="date"
               id="booking-date"
               data-testid="booking-date"
               aria-label="Choose date"
               {...formik.getFieldProps('date')} />
        <div className="text-red-700 text-sm font-bold">{formik.touched.date && formik.errors.date}</div>
        <label htmlFor="booking-time">Choose time</label>
        <select className="border border-gray-600 p-6 mb-3"
                id="booking-time"
                data-testid="booking-time"
                aria-label="Choose time"
                {...formik.getFieldProps('time')}>
          {availableTimes.times.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <div className="text-red-700 text-sm font-bold">{formik.touched.time && formik.errors.time}</div>
        <label htmlFor="guests">Number of guests</label>
        <input className="border border-gray-600 p-6 mb-3"
               type="number"
               placeholder="1"
               min="1"
               max="10"
               id="guests"
               data-testid="booking-guests"
               aria-label="Enter number of guests"
               {...formik.getFieldProps('guests')}
        />
        <div className="text-fuchsia-700 text-sm font-bold">{formik.touched.guests && formik.errors.guests}</div>
        <label htmlFor="occasion">Occasion</label>
        <select className="border border-gray-600 p-6 mb-3"
                id="occasion"
                data-testid="booking-occasion"
                aria-label="Choose occasion"
                {...formik.getFieldProps('occasion')}>
          <option value=""></option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <div className="text-fuchsia-700 text-sm font-bold">{formik.touched.occasion && formik.errors.occasion}</div>
        <input
          className="bg-llgold font-sans px-4 py-6 text-xl font-semibold rounded-lg w-full md:w-60"
          type="submit"
          value="Make Your Booking" />
      </form>
    </>
  );
};
