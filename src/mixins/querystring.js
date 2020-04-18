import url from "url";

export default {
    data: () => {
        let qs = [
            ...new URLSearchParams(url.parse(location.href).query).entries()
        ].reduce((q, [k, v]) => Object.assign(q, {[k]: v}), {});
        return {query_string: qs}
    }
}
