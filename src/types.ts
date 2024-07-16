import { type InferType, object, string } from 'yup';

export const ErrorEntry = object({
	projectStage: string().required(),
	topic: string().required(),
	qrp: string(),
	honestError: string(),
});

export type TErrorEntry = InferType<typeof ErrorEntry>;