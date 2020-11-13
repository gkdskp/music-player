import 'package:flutter/material.dart';
import 'package:music/widgets/card/playlist_card.dart';

class PlaylistList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: Change to GridView
    return Row(
      children: [
        PlaylistCard(title: 'Favourites', image: AssetImage('assets/img/pl1.jpg')),
        SizedBox(width: 10),
        PlaylistCard(title: 'Recently Played', image: AssetImage('assets/img/pl2.jpg')),
        SizedBox(width: 10),
        PlaylistCard(title: 'Recently Added', image: AssetImage('assets/img/pl3.jpg')),
        SizedBox(width: 10),
        PlaylistCard(title: 'History', image: AssetImage('assets/img/pl1.jpg')),
      ],
    );
  }
}
