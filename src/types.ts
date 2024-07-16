import { type InferType, object, string } from 'yup';


export const ErrorEntry = object({
	projectStage: string().required(),
	// TODO: fix type check here
	topic: string(), //.required(),
	qrp: string().nullable(),
	honestError: string().nullable()
});

export type TErrorEntry = InferType<typeof ErrorEntry>;