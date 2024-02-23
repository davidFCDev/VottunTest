export const searchToken = async () => {
    const requestBody = {
        contractAddress: "0xdF1044be4B27cc5205e6CE2975dC89C48D290D01",
        network: 80001,
        id: 1
    };

    const response = await fetch(`https://api.vottun.tech/erc/v1/erc721/tokenUri`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
            'x-application-vkn': import.meta.env.VITE_APP_ID
        },
        body: JSON.stringify(requestBody)
    });
    console.log(response);

    if (!response.ok) {
        throw new Error('Failed to fetch token');
    }

    return response.json();
}

