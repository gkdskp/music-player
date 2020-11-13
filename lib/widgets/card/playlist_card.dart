import 'package:flutter/material.dart';
import 'package:music/theme/theme.dart';
import 'package:music/widgets/layout/sidebar.dart';

class PlaylistCard extends StatelessWidget {
  // Title for the playlist
  final String title;

  // Image for the playlist
  final ImageProvider image;

  const PlaylistCard({
    Key key, 
    @required this.title,
    this.image
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          width: (MediaQuery.of(context).size.width - (100 + SIDEBAR_WIDTH)) / 4,
          height: 200,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15.0),
            color: Colors.black,
            image: DecorationImage(
              colorFilter: ColorFilter.mode(
                Colors.black.withOpacity(0.5),
                BlendMode.dstATop,
              ),
              fit: BoxFit.cover,
              image: image,
            ),
          ),
        ),
        Positioned(
          child: Text(
            title,
            style: Theme.of(context).textTheme.headline5.copyWith(
                  color: Colors.white,
                ),
          ),
          bottom: 16.0,
          left: 16.0,
        ),
        Positioned(
          child: IconButton(
            icon: Icon(
              Icons.play_circle_fill,
              size: 48,
              color: Palette.ACCENT_COLOR,
            ),
            onPressed: () {},
          ),
          bottom: 32.0,
          right: 32.0,
        ),
      ],
    );
  }
}
