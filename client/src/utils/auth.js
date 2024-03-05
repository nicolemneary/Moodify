export function generateCodeVerifier(length = 128) {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let randomChars = '';
    for (let i = 0; i < length; i++) {
      randomChars += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    console.log('Generated code verifier:', randomChars);
    return randomChars;
}

export async function generateCodeChallenge(verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    try {
        const digest = await crypto.subtle.digest('SHA-256', data);
        const challenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
        console.log('Generated code challenge:', challenge);
        return challenge;
    } catch (error) {
        console.error('Error in generateCodeChallenge:', error);
        throw error; // Rethrow to handle it in calling function
    }
}