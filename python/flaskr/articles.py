from flask import (
    Blueprint, flash, Response, jsonify, g, redirect, render_template, request, url_for
)
import json
import collections
from werkzeug.exceptions import abort

from flaskr.auth import login_required
from flaskr.db import get_db

bp = Blueprint('articles', __name__)

@bp.route('/articles', methods=('GET', 'POST'))
def getArticles():
    if request.method == 'GET':
        db = get_db()
        posts = db.execute(
            'SELECT *'
            ' FROM articles'
            ' ORDER BY name ASC'
        ).fetchall()
        objects_list = []
        for row in posts:
            d = collections.OrderedDict()
            d['id'] = row[0]
            d['name'] = row[1]
            d['prix'] = row[2]
            d['description'] = row[3]
            d['category'] = row[4]
            objects_list.append(d)
        j = json.dumps(objects_list)
        return j
    return 'pb'
