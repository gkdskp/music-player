import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:music/theme/theme.dart';

const double SIDEBAR_WIDTH = 300.0;

class Sidebar extends StatefulWidget {
  @override
  _SidebarState createState() => _SidebarState();
}

class _SidebarState extends State<Sidebar> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          width: SIDEBAR_WIDTH,
          color: Palette.SIDEBAR_BG_COLOR,
        ),
        BackdropFilter(
          filter: ImageFilter.blur(
            sigmaX: 2.0,
            sigmaY: 2.0,
          ),
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 32.0),
            color: Colors.transparent,
            width: SIDEBAR_WIDTH,
            child: ListView(
              children: [
                Container(
                  height: 150,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.music_note,
                        color: Colors.grey[700],
                      ),
                      SizedBox(width: 10),
                      Text(
                        'MUSIC',
                        style: TextStyle(
                          fontSize: 20.0,
                          color: Colors.grey[700],
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
                _searchBar(),
                SizedBox(height: 30),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _SidebarItem(
                      label: 'Home',
                      iconData: Icons.home,
                      isActive: true,
                      onTap: () {},
                    ),
                    _SidebarItem(
                      label: 'Artists',
                      iconData: Icons.person_outline,
                      isActive: false,
                      onTap: () {},
                    ),
                    _SidebarItem(
                      label: 'Songs',
                      iconData: Icons.music_note_outlined,
                      isActive: false,
                      onTap: () {},
                    ),
                    _SidebarItem(
                      label: 'Albums',
                      iconData: Icons.album_outlined,
                      isActive: false,
                      onTap: () {},
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _searchBar() {
    TextEditingController _textEditingController = TextEditingController();

    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: 16.0,
      ),
      child: TextField(
        controller: _textEditingController,
        onChanged: (value) => setState(() {}),
        decoration: InputDecoration(
          hintText: 'Search',
          hintStyle: TextStyle(
            color: Palette.SIDEBAR_FG_COLOR,
          ),
          border: InputBorder.none,
          focusedBorder: InputBorder.none,
          enabledBorder: InputBorder.none,
          errorBorder: InputBorder.none,
          disabledBorder: InputBorder.none,
          contentPadding:
              EdgeInsets.only(left: 0, bottom: 0, top: 11, right: 15),
          icon: Icon(
            Icons.search,
            color: Palette.SIDEBAR_FG_COLOR,
          ),
          suffixIcon: _textEditingController.text.length > 0 ? Icon(
            Icons.clear,
            color: Palette.SIDEBAR_FG_COLOR,
          ): SizedBox.shrink()
        ),
      ),
    );
  }
}

class _SidebarItem extends StatelessWidget {
  // Function callback when the item is tapped
  final Function onTap;

  // The leading Icon for the item
  final IconData iconData;

  // The title of the item
  final String label;

  // Whether the item is currently active
  final bool isActive;

  _SidebarItem(
      {this.onTap, this.iconData, @required this.label, this.isActive = false});

  @override
  Widget build(BuildContext context) {
    Color color =
        (isActive) ? Palette.SIDEBAR_ACTIVE_FG_COLOR : Palette.SIDEBAR_FG_COLOR;
    return ListTile(
      leading: Icon(
        iconData,
        color: color,
      ),
      title: Text(
        label,
        style: TextStyle(
          color: color,
        ),
      ),
      onTap: onTap,
    );
  }
}
