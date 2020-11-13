import 'package:flutter/material.dart';
import 'package:music/theme/theme.dart';
import 'package:music/widgets/widgets.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return SidebarLayout(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          PlaylistList()
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {},
        label: Text('Shuffle Play'),
        icon: Icon(Icons.shuffle),
      ),
    );
  }
}
