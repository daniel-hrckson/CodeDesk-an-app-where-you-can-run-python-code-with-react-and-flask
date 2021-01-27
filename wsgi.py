from app import application
import os

# if __name__ == '__main__':
#     application.run(debug=True)

if __name__ == '__main__':
    application.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
