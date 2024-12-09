function permutationSort(a)
    {

    function generatePermutations(arr)
        {
        if (arr.length <= 1) return [arr];
        const permutations = [];
        for (let i = 0; i < arr.length; i++) 
            
        {
            const rest = arr.slice(0, i).concat(arr.slice(i + 1));
            const restPermutations = generatePermutations(rest);
            
            for (const perm of restPermutations)
                
            {
                permutations.push([arr[i]].concat(perm));
            }
        }
        return permutations;
    }

    const permutations = generatePermutations(a);

    for (const perm of permutations)
        
        {
        if (perm.every((val, idx) => idx === 0 || perm[idx - 1] <= val))
        {
            
            for (let i = 0; i < a.length; i++) 
            {
                a[i] = perm[i];
            }
            return permutations.length; 
        }
    }

    return -1; 
}
