import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY?? "");

export async function POST(request: Request) {
    const priceId = process.env.YEARLY_PRICE_ID!;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/?success=true`,
            cancel_url: `${request.headers.get('origin')}/price`,
        });
        return NextResponse.json({ url: session.url, sessionId: session.id });
    } catch (error) {
        return NextResponse.json({ message: error instanceof Error ? error.message : 'An unknown error occurred' }, { status: 500 });
    }
}