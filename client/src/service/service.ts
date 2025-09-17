const service = async (url: string, options: object = {}) => {
    try {
        const response = await fetch(url, { ...options }); // { json: async () => 'true', ok: true, status: 200  }
        if (!response.ok) {
            console.log("response.not.ok::", response);
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data::", data);
        return data;
    } catch (error) {
        console.log(error);
    }
    

};
export default service