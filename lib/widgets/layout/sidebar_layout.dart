import 'package:flutter/material.dart';
import 'package:music/theme/theme.dart';
import '../widgets.dart';

class SidebarLayout extends StatelessWidget {
  // This is the main layout wrapper for the app
  // This takes a child widget which will be rendered alongside the sidebar
  final Widget child;

  // You can also specify the FloatingActionButton and FloatingActionButtonLocation
  final FloatingActionButton floatingActionButton;
  final FloatingActionButtonLocation floatingActionButtonLocation;

  SidebarLayout({@required this.child, this.floatingActionButton, this.floatingActionButtonLocation});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Palette.SCAFFOLD_BG_COLOR,
      body: Row(
        children: <Widget>[
          Sidebar(),
          Padding(
            padding: const EdgeInsets.all(32.0),
            child: child,
          )
        ],
      ),
      floatingActionButton: floatingActionButton,
      floatingActionButtonLocation: floatingActionButtonLocation,
    );
  }
}