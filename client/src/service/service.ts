const service = async (url: string, options: object = {}) => {
    try {
        const response = await fetch(url, { ...options });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    

};
export default service