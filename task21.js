let team = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
createDreamTeam = (params) => params.filter(item => item === String(item) ? item : false )
                                    .sort()
                                    .map(item => item.split('')[0])
                                    .join('')
console.log(createDreamTeam(team));