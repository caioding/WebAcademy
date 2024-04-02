import { Prof } from './helpersTypes';

export function listProfs(profs: Prof[]) {
 const filteredProfs = profs.filter(p => p.poweredByNodejs === true);
 const list = filteredProfs.map((p)=>`<li>${p.name}-${p.type}</li>`);
 return `<ul>${list.join('')}</ul>`;
}