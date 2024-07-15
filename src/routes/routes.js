import Board from '~/pages/Boards/_id'
import Catalog from '~/pages/Catalog/_id'
import HTRisks from '~/pages/Catalog/Details/HTRisks'
import SpaceArena from '~/pages/Catalog/Details/SpaceArena'
import Profile from '~/pages/Profile'

export const publicRoutes = [
  { path: 'land', component: Board, loader: null },
  { path: 'profile', component: Profile, loader: null },
  {
    path: 'catalog', component: Catalog, loader: null, children: [
      { path: 'spaceArena', component: SpaceArena, loader: null }
    ]
  }
]

export const childRoutes = {
  'catalog': [
    { path: 'spaceArena', component: SpaceArena, loader: null },
    { path: 'hackingTheRisks', component: HTRisks, loader: null }
  ]
}