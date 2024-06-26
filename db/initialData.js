const getInitialDataQuery = () => {
  return `
	BEGIN;
		INSERT INTO public.bodypart(
			name
		) VALUES ('chest');
		INSERT INTO public.bodypart(
			name
		) VALUES ('back');

		INSERT INTO public.muscle(
			name, description, bodypart_id)
			VALUES ('pectoralis major', 'upper chest', (SELECT bodypart_id FROM public.bodypart where name='chest'));
		INSERT INTO public.muscle(
			name, description, bodypart_id)
			VALUES ('pectoralis minor', 'lower chest', (SELECT bodypart_id FROM public.bodypart where name='chest'));
		INSERT INTO public.muscle(
			name, description, bodypart_id)
			VALUES ('rhomboid', 'upper back', (SELECT bodypart_id FROM public.bodypart where name='back'));
		INSERT INTO public.muscle(
			name, description, bodypart_id)
			VALUES ('lats', 'upper back', (SELECT bodypart_id FROM public.bodypart where name='back'));
		INSERT INTO public.equipment(
			name, description
		) VALUES ('bodyweight', 'the weight of your body');
		INSERT INTO public.equipment(
			name, description
		) VALUES ('olympic barbell', 'a bar that weighs 20kg');
		INSERT INTO public.equipment(
			name, description
		) VALUES ('dumbbells', 'mankuernah');
		
		INSERT INTO public.exercise(
			name, equipment, gif_url, instructions)
			VALUES ('push ups', 
			        (SELECT equipment_id from public.equipment where name='bodyweight'), 
					null, 
					'enpugate del sueloh kon vrasos');
		INSERT INTO public.exercise(
			name, equipment, gif_url, instructions)
			VALUES ('barbell bench press', 
					(SELECT equipment_id from public.equipment where name='olympic barbell'), 
					null, 
					'enpugar vara ensimah de pexo');
		INSERT INTO public.exercise(
			name, equipment, gif_url, instructions)
			VALUES ('incline bench dumbbell row', 
					(SELECT equipment_id from public.equipment where name='dumbbells'), 
					null, 
					'tunvao en vanko inklinaoh aser remoh');
		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='pectoralis minor'),
			(SELECT exercise_id from public.exercise where name='push ups')
		  );
		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='pectoralis major'),
			(SELECT exercise_id from public.exercise where name='push ups')
		  );
		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='pectoralis minor'),
			(SELECT exercise_id from public.exercise where name='barbell bench press')
		  );
		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='pectoralis major'),
			(SELECT exercise_id from public.exercise where name='barbell bench press')
		  );
		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='rhomboid'),
			(SELECT exercise_id from public.exercise where name='incline bench dumbbell row')
		  );
		INSERT INTO public.muscleexercise(
			muscle_id, exercise_id
		) VALUES 
		  (
			(SELECT muscle_id from public.muscle where name='lats'),
			(SELECT exercise_id from public.exercise where name='incline bench dumbbell row')
		  );
		INSERT INTO public.routinetype(
			name, description, icon_url, icon_alt_text)
			VALUES ('Weightlifting', 'Lifting weights', 'https://clipground.com/images/dumbbell-vector-clipart-1.png', 'Dumbbell');
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
