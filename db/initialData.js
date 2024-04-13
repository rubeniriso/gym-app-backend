const getInitialDataQuery = () => {
  return `
	BEGIN;
		INSERT INTO public.bodypart(
			name
		) VALUES ('chest');

		INSERT INTO public.muscle(
			name, description, bodypart_id)
			VALUES ('pectoralis major', 'upper chest', (SELECT bodypart_id FROM public.bodypart where name='chest'));
		INSERT INTO public.muscle(
			name, description, bodypart_id)
			VALUES ('pectoralis minor', 'lower chest', (SELECT bodypart_id FROM public.bodypart where name='chest'));
	
		INSERT INTO public.equipment(
			name, description
		) VALUES ('bodyweight', 'the weight of your body');

		INSERT INTO public.exercise(
			name, equipment, gif_url, primarymuscle_id, instructions)
			VALUES ('push ups', 
			        (SELECT equipment_id from public.equipment where name='bodyweight'), 
					null, 
					(SELECT muscle_id FROM public.muscle where name='pectoralis major'), 
					'enpugate del sueloh kon vrasos');

		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='pectoralis minor'),
			(SELECT exercise_id from public.exercise where name='push ups')
		  );
	COMMIT;
	END;
	`;
};
/*
	INSERT INTO public.routinetype(
			name, description, icon_url, icon_alt_text)
			VALUES ('Weightlifting', 'Lifting weights', 'https://clipground.com/images/dumbbell-vector-clipart-1.png', 'Dumbbell');
*/

export const initialData = { getInitialDataQuery };
