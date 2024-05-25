# APP Clube Airsoft Porto

## Requirements:

### User requirement
- User can see upcoming event
- user can view details of event
- user can select event he want play ( must be authenticate for do it)
- user can select team he want play ( must be authenticate for do it)
- user can buy ticket for the event ( must be authenticate for do it)
- user can register 7 players in the same register ( must be authenticate for do it)

### Admin requirement
- admin can create events
- admin can set tickets prices
- admin can set the teams and teams description
- admin can set the gap of registration in teams
- admin can see the list of all players and status payment
- admin can set player/user as a partner
- admin can create refund system


- Create events for a date
- a event must have teams min(2)
- 


Event
 - name
 - date
 - img
 - decription
 - rules
 - teams
 - teams_differentiator

Event_plan
  - name
  - price

Team
  - name
  - description
  - img
  - players


Player
  - name
  - APD
  - N_APD
  - patner


Partner
  - player_name


User
  - name
  - email
  - date_regest

