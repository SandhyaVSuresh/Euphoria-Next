export async function GET(req) {
    const type = req.nextUrl.searchParams.get('type')
    console.log('Type:', type)
    return Response.json([
        {title:'Nokia Mobile'},
        {title: 'samsung mobile'},
    ])
}

export async function POST(req) {
    const body = await req.json();
    console.log(body)
    return Response.json({message: 'Got your data'});
}