// @ts-expect-error
import Amadeus from 'amadeus';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const amadeus = new Amadeus({
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET
});

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	if (req.method === 'POST') {
		try {
			const { page, subType, keyword } = req.query;
			// API call with params we requested from client app
			const response = await amadeus.client.get(
				'/v1/reference-data/locations',
				{
					keyword,
					subType,
					'page[offset]': page !== undefined ? page : 0 * 10
				}
			);
			// Sending response for client
			res.json(JSON.parse(response.body));
		} catch (err) {
			res.json(err);
		}
	} else {
		res.redirect('/404');
	}
	res.end();
};

export default handler;
